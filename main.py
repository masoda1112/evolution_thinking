class Idea():
    def __init__(self, name, physical_variables, concept_variables, functions):
        self.name = name
        self.physical_variables = physical_variables
        self.concept_variables = concept_variables
        self.functions = functions
        self.ideas = []

    def build_idea(self):
        # 擬態(~みたいな~、保留)
        # 交換(〜を使用する~、保留)
        # 融合（~と~、保留）
        for i in self.physical_variables:
            self.ideas += self.increase(i)
            self.ideas += self.missing(i)
            self.ideas += self.divide(i)
            self.ideas += self.reverse(i)
                
        for i in self.concept_variables:
            self.ideas += self.transfer(i)

        return self.ideas

    # 変量
    def increase(self, physical_var):
        ideas = []
        ideas.append('大量の' + physical_var + 'の' + self.name)
        ideas.append('少量の' + physical_var + 'の' + self.name)
        return ideas
    
    # 欠損
    def missing(self, physical_val):
        ideas = []
        ideas.append(physical_val + 'の無い' + self.name)
        return ideas
    
    # 転移
    def transfer(self, concept_var):
        ideas = []
        ideas.append(concept_var + 'では無い' + self.name)
        return ideas

    # 分離
    def divide(self, physical_var):
        ideas = []
        ideas.append(physical_var + 'を分離する' + self.name)
        return ideas

    # 逆転(~が主役の~、~を動かす~、~する~)
    def reverse(self, physical_var):
        ideas = []
        ideas.append(physical_var + 'が主役の' + self.name)
        for i in self.functions:
            ideas.append(physical_var + i + self.name)
        return ideas

idea = Idea('机', ['足','台'], ['家具', 'インテリア'],['に置く'])
idea_2 = Idea('キャンプ場', ['野原','バーベキューセット','テント','トイレ'], ['アウトドア','娯楽','宿泊'], ['に泊まる','で食べる','で料理する'])
ideas = idea.build_idea()
ideas_2 = idea_2.build_idea()
print(ideas)
print(ideas_2)